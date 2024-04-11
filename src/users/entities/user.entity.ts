import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'users',
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  age: number;

  @Prop({
    enum: ['employed', 'unemployed'],
    default: 'unemployed',
  })
  status: string;
}
export type UserDocument = User & Document;
export const userSchema = SchemaFactory.createForClass(User);
export const USER_MODEL = User.name;
