import '../scss/button.scss';

interface Props {
  type: 'submit';
  text: string;
}

export default function Button({
  type,
  text,
}: Props) {
  return (
    <button className="Button" type={type}>
      {text}
    </button>
  )
}