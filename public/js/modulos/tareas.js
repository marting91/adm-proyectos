import axios from "axios";
import Swal from "sweetalert2";

const tareas = document.querySelector('.listado-pendientes');

if (tareas) {
    tareas.addEventListener('click', e => {
        if (e.target.classList.contains('fa-check-circle')) {
            const icono = e.target;
            const idTarea = icono.parentElement.parentElement.dataset.tarea;

            const url = `${location.origin}/tareas/${idTarea}`;

            axios.patch(url, { idTarea })
                .then(respuesta => {
                    console.log(respuesta.data);
                    (respuesta.data.estado ? icono.classList.add('completo') : icono.classList.remove('completo'));
                })
        }

        if (e.target.classList.contains('fa-trash')) {
            const tareaHTML = e.target.parentElement.parentElement;
            const idTarea = tareaHTML.dataset.tarea;

            Swal.fire({
                title: 'Seguro que desea eliminar esta tarea?',
                text: "Una tarea eliminada no se puede recuperar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    const url = `${location.origin}/tareas/${idTarea}`;
                    axios.delete(url, { params: { idTarea } })
                        .then(respuesta => {
                            if (respuesta.status === 200) {
                                // Borro la fila en el HTML
                                tareaHTML.remove();
                                Swal.fire(
                                    'Tarea eliminada',
                                    respuesta.data,
                                    'success'
                                )
                            }
                        })
                        .catch(err => {
                            Swal.fire(
                                'Hubo un error, intente nuevamente',
                                "Error",
                                'error'
                            )
                        });
                }
            })
        }
    });
}

export default tareas;