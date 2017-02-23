import { Club } from './club';
import { Activity } from './activity';
import { Mail } from './mail';
import { Comment } from './comment';

export class student{
  mId: string;
  mPassword: string;
  mName: string;
  mGrade: number;
  mContact: string;
  mHeadUrl: string;
  mMails: Mail[];
  mComments: Comment[];
  mHostClubs: Club[];
  mInClubs: Club[];
  mActivities: Activity[];
}
