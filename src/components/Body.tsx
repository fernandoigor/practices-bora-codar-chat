import { DayHours } from "./DayHours";
import { Message } from "./Message";

export function Body() {
  return (
    <view className="my-4 flex-1 flex flex-col w-full overflow-auto">
      <DayHours dayHours="Hoje 11:30" />
      <Message
        name="Nome da Pessoa"
        time="11:00"
        message="Mensagem longa para teste bem aqui, você precisa ver! 😬"
      />
      <Message name="Eu" time="11:07" message="Ok! 👍" isMe />
      <Message name="Nome da Pessoa" time="11:05" message="kkkk" />
      <DayHours dayHours="Hoje 11:30" />
      <Message
        name="Nome da Pessoa"
        time="11:00"
        message="Mensagem longa para teste bem aqui, você precisa ver! simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c"
      />
      <Message name="Eu" time="11:07" message="Ok! 👍" isMe />
      <Message name="Nome da Pessoa" time="11:05" message="kkkk" />
      <DayHours dayHours="Hoje 11:30" />
      <Message
        name="Nome da Pessoa"
        time="11:00"
        message="Mensagem longa para teste bem aqui, você precisa ver! 😬"
      />
      <Message
        name="Eu"
        time="11:07"
        message="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c"
        isMe
      />
      <Message name="Nome da Pessoa" time="11:05" message="kkkk" />
      <DayHours dayHours="Hoje 11:30" />
      <Message
        name="Nome da Pessoa"
        time="11:00"
        message="Mensagem longa para teste bem aqui, você precisa ver! 😬"
      />
      <Message name="Eu" time="11:07" message="Ok! 👍" isMe />
      <Message name="Nome da Pessoa" time="11:05" message="kkkk" />
      <DayHours dayHours="Hoje 11:30" />
      <Message
        name="Nome da Pessoa"
        time="11:00"
        message="Mensagem longa para teste bem aqui, você precisa ver! 😬"
      />
      <Message name="Eu" time="11:07" message="Ok! 👍" isMe />
      <Message name="Nome da Pessoa" time="11:05" message="kkkk" />
    </view>
  );
}
