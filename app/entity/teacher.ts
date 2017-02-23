import { Club } from './club';
import { Mail } from './mail';

export class Teacher{
  mId: number;
  mPassword: string;
  mName: string;
  mMajor: string;
  mContact: string;
  mHeadUrl: string;
  mMail: Mail[];
  mClub: Club[];  
}
