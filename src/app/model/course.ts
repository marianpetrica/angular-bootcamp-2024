
export interface Course {
  id: number;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl?: string;
  courseListIcon: string;
  category: string;
  lessonsCount: number;
  isDisabled : boolean;
}


export function sortCoursesBySeqNo(c1: Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}
