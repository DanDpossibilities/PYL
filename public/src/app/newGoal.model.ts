export interface NewGoal {
  user: String;
  title: String;
  category: String;
  due_date: Date;
  sub_goals: Array<Object>;
  description: String;
  completed: Boolean;
}
