import { PrismaClient } from '@prisma/client'
import { createClass } from './classes'
import { customLogger } from './logger'
import { createMajor } from './major'
import { createStudents } from './student'
import { createSubjects } from './subject'

const prisma = new PrismaClient()

const dropData = async () => {
  await prisma.classesStudents.deleteMany()
  await prisma.class.deleteMany()
  await prisma.subject.deleteMany()
  await prisma.student.deleteMany()
  await prisma.major.deleteMany()
  customLogger.info('drop database success')
}

const major = async () => {
  try {
    await createMajor(prisma)
    customLogger.info('create major success')
  } catch (err) {
    customLogger.info(`Major Error: ${err}`)
    process.exit(1)
  }
}

const subject = async () => {
  try {
    await createSubjects(prisma, await prisma.major.findMany())
    customLogger.info('create subject success')
  } catch (err) {
    customLogger.info(`Subject Error: ${err}`)
    process.exit(1)
  }
}

const student = async () => {
  try {
    await createStudents(prisma, await prisma.major.findMany())
    customLogger.info('create student success')
  } catch (err) {
    customLogger.info(`Student Error: ${err}`)
    process.exit(1)
  }
}

const classes = async () => {
  try {
    await createClass(prisma, await prisma.subject.findMany())
    customLogger.info('create class success')
  } catch (err) {
    customLogger.info(`Class Error: ${err}`)
    process.exit(1)
  }
}

const studentClass = async () => {
  try {
    await prisma.classesStudents.create({
      data: {
        studentId: (await prisma.student.findFirst()).id,
        classId: (await prisma.class.findFirst()).id,
        semester: '2022년도1학기'
      }
    })
    customLogger.info('create studentClass success')
  } catch (err) {
    customLogger.info(`StudentClass Error: ${err}`)
    process.exit(1)
  }
}

const main = async () => {
  customLogger.info('running seeder')
  customLogger.info('----drop database----')
  await dropData()

  customLogger.info('----create major----')
  await major()

  customLogger.info('----create subject----')
  await subject()

  customLogger.info('----create student----')
  await student()

  customLogger.info('----create class----')
  await classes()

  customLogger.info('----create studentClass----')
  await studentClass()

  customLogger.info('end seeder')
}

;(async () => {
  main()
})()
