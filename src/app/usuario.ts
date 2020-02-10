export class Usuario {
  public id?: number;
  public nome?: string;
  public email?: string;
  public senha?: string;
  public active?: boolean;

  static fromJson(data: any) {
    return Object.assign(new Usuario(), data);
  }
}
