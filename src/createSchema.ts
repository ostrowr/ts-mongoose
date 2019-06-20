import { SchemaOptions, Schema } from 'mongoose';
import { ConvertObject, TypeWithTimestamps } from './types';

type CreateSchema = <T extends { [x: string]: any }, O extends SchemaOptions>(
  definition?: T,
  options?: O extends SchemaOptions ? SchemaOptions : O
) => Schema & {
  definition: ConvertObject<TypeWithTimestamps<O, T>>;
  options: O;
};

export const createSchema: CreateSchema = (definition?, options?) => {
  return new Schema(definition, options) as any;
};