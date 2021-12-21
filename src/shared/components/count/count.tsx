interface Props {
  loading: boolean;
  count: number;
}
function Count({ count, loading }: Props) {
  return (
    <span>{`Total records ${
      loading ? "Loading ..." : count > -1 ? count : 0
    }`}</span>
  );
}

export { Count };
