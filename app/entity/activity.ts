import { Comment } from './comment';

export class Activity{
  mId: number;
  mName: string;
  mLocation: string;
  mDate: number;
  mState: number;
  mContent: string;
  mImgUrl: string;
  mComments: Comment[];
}

// {"mId":1,"mName":"骑行","mLocation":"嘉定校区","mDate":1487568600000,"mState":1,"mContent":"嘉定校区自行车骑行活动","mImgUrl":null,"mComments":[]}
