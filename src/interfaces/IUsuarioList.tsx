import { Dispatch, SetStateAction } from "react";
import IUsuario from "./IUsuario";

export default interface IUsuarioList {
  usuariosList: IUsuario[];
  setUsuariosList?: Dispatch<SetStateAction<IUsuario[]>>;
  usuarioLogado?: IUsuario;
  setUsuarioLogado?: Dispatch<SetStateAction<IUsuario | null | undefined>>;
}
