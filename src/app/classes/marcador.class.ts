export class Marcador {
    public lat: number;
    public lng: number;
    public titulo: string = 'Sin Título';
    public descripcion: string = 'Sin Descripción';
    //public titulo: string = '';
    //public descripcion: string = '';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
