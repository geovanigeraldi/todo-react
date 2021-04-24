import Button from "./Button";

export default function Titulo({key, itemTitulo, handleUpdate, handleDelete}) {
  return (
    <div key={key}>
      <p
        onClick={handleUpdate}
      >
       {itemTitulo.titulo}
      </p>

      <Button
        text="Excluir"
        click={handleDelete}
      />
    </div>
  );
}