import Image from "next/image";
import {CharacterType} from "@/assets/hooks/useCharacters";
import styles from './CharacterCard.module.scss'

type PropsType = {
    character: CharacterType
}
export const CharacterCard = (props: PropsType) => {
    return (
        <div key={props.character.id} className={styles.card}>
            <div>
                {props.character.name}
            </div>
            <Image src={props.character.image} alt={`Picture of ${props.character.name}`} width={300} height={300}/>
        </div>
    )
}