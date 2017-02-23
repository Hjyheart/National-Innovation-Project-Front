import { Activity } from './activity';
import { Comment } from './comment';
import { File } from './file';

export class Club{
	mId: number;
	mName: string;
	mState: boolean;
	mActivities: Activity[];
	mFiles: File[];
	mComments: Comment[];
}
