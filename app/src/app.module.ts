import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { PrismaModule } from './config/prisma.module'
import { MajorModule } from './major/major.module'
import { SubjectModule } from './subject/subject.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    MajorModule,
    PrismaModule,
    SubjectModule
  ]
})
export class AppModule {}
