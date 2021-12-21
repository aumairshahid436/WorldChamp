interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <h1 className="d-flex text-white fw-bolder my-1 fs-3">{title}</h1>;
}

export { Title };
