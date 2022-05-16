import { useParams } from "solid-app-router";

function Viewer() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Viewer;
