export interface Evento {
    _id?: string;
    url_imagen: string;
    nombre: string;
    descripcion: string;
    id_evento: string;
    patrocinador: string;
    fecha_evento: Date;
    hora_inicio_general: Date;
    hora_final_general: Date;
    lugar: string;
    _ticket: [];
}