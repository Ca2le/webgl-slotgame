
interface Icon {
  id: string;
  path: string;
}

export function Icon({ id, path,  }: Icon) {
  return (
    <svg width={"15px"}  id={id} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 512 512"}>
      <path fill="#FFF" d={path}></path>
    </svg>
  )
}
