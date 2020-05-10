export class User {
  id: number;
  constructor(
    private login: string,
    private password: string,
    private email?: string,
    private surname?: string,
    private name?: string,
    private patronymic?: string,
    private birthday?: string,
    public userRole?: string
  ) {}
}

