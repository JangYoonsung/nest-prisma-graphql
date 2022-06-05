import { PrismaClient } from "@prisma/client";
import { customLogger } from "./logger";

const prisma = new PrismaClient()

const dropData = async () => {
  await prisma.classesStudnets.deleteMany()
  await prisma.class.deleteMany()
  await prisma.subject.deleteMany()
  await prisma.student.deleteMany()
  await prisma.major.deleteMany()
  customLogger.info('drop database success')
}

const major = async () => {
  try {
    await prisma.major.create({
      data: {
        name: 'test'
      }
    })
    customLogger.info('create major success')

    return prisma.major.findFirst()
  } catch (err) {
    customLogger.info(`Major Error: ${err}`)
    process.exit(1)
  }
}

const subject = async () => {
  try {
    await prisma.subject.create({
      data: {
        name: 'test',
        credit: 3,
        code: 'test_1',
        type: 'MUST',
        majorId: (await prisma.major.findFirst()).id
      }
    })
    customLogger.info('create subject success')
  } catch (err) {
    customLogger.info(`Subject Error: ${err}`)
    process.exit(1)
  }
}

const student = async () => {
  try {
    await prisma.student.create({
      data: {
        name: 'test',
        studentNumber: 1,
        grade: 1,
        entrance: new Date(2022, 4, 1),
        majorId: (await prisma.major.findFirst()).id
      }
    })
    customLogger.info('create student success')
  } catch (err) {
    customLogger.info(`Student Error: ${err}`)
    process.exit(1)
  }
}

const classes = async () => {
  try {
    await prisma.class.create({
      data: {
        time: new Date(2022, 1, 1, 10, 0, 0),
        days: 'MONDAY',
        subjectId: (await prisma.subject.findFirst()).id
      }
    })
    customLogger.info('create class success')
  } catch (err) {
    customLogger.info(`Class Error: ${err}`)
    process.exit(1)
  }
}

const studentClass = async () => {
  try {
    await prisma.classesStudnets.create({
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

(async () => {
  main()
})()