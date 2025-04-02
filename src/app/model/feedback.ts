export enum Level{
  BEGINNER = 'BEGINNER',
  INTERMEDIATE='INTERMEDIATE',
  USED_OTHER_FRAMEWORK='USED_OTHER_FRAMEWORK'
}

export interface Feedback{
  id?:number,
  name:string,
  level:Level,
  feedbackText:string,
  rating:number
}
