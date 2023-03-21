import * as C from './style';

type Props = {
    title:string;
    value:number;
}

export const ResumeItem = ({title, value} :Props ) => {

    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info>R$ {value}</C.Info>
        </C.Container>
    );
}