export class Session{
  private userName: string;
  private state = false;

  constructor(username: string){
  	this.userName = username; 
  }

  public isTrue(): boolean{
    return this.state;
  }

  setUserName(username: string){
  	this.userName = username;
  }

  getUserName():string{
  	return this.userName;
  }

  setState(state: boolean){
  	this.state = state;
  }

  getState():boolean{
  	return this.state;
  }

}
