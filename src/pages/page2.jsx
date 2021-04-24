import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Button from '../components/Button';
import Titulo from '../components/Titulo';

function Page2() {
  const [titulo, setTitulo] = useState("");
  const [titulos, setTitulos] = useState([]);

  function handleAdd() {
    if (titulo) {

      const arrTitulos = {
        id: uuid(),
        titulo: titulo
      }

      const arrNew = [...titulos];
      arrNew.unshift(arrTitulos);

      setTitulos(arrNew);
      setTitulo("");
      //console.log(arrNew);           
    }
  }

  function handleDelete(id) {
    const newArr = titulos.filter((f) => f.id !== id);
    setTitulos(newArr);
    //console.log("delete " + id);
  }

  function handleUpdate(id) {
    const item = titulos.filter((f) => f.id === id)[0];
    handleDelete(item.id);
    setTitulo(item.titulo);
    //console.log("update " + item.titulo);
  }

  return (
    <div>

      <div>
        <input
          type="text"
          value={titulo}
          onChange={((e) => setTitulo(e.target.value))}
        />
        
        <Button 
          text="Adicionar"
          click={handleAdd}
        />
      </div>

      <div>
        {titulos.map((m) => (
          <Titulo 
            key={m.id}
            itemTitulo={m}
            handleUpdate={(e) => {
              e.stopPropagation();
              handleUpdate(m.id);
            }}
            handleDelete={(e) => {
              e.stopPropagation();
              handleDelete(m.id);
            }}
          />
        ))
        }
      </div>

    </div>
  );
}

export default Page2;