export default class BikesSevice {


    getResource = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`);
        }
        const data = await res.json();
        if (!data) {
            return;
        }
        console.log(data);
        return await data;
    }

    getAllBikes = async () => {
        return await this.getResource('/api');
    };

    postBike = async (body) => {
        const res = await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        if (!data) {
            return;
        }
        return await data;
    }

    deleteBike = async (body) => {
        console.log(body)
        const res = await fetch(`/api/delete/${body}`, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await res.json();
        if (!data) {
            return;
        }
        console.log(data);
        return await data;
    }
    getAllRented = async () => {
        return await this.getResource('/api/rented');
    };

    addBike = async (body) => {
        console.log(body)
        const res = await fetch(`/api/rent/${body}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await res.json();
        if (!data) {
            return;
        }
        console.log(data);
        return await data;
    }

    removeRent = async (body) => {
        console.log(body)
        const res = await fetch(`/api/remove/${body}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await res.json();
        if (!data) {
            return;
        }
        console.log(data);
        return await data;
    }



    onDiscount = async (body) => {
        console.log(body)
        const res = await fetch(`/api/discount/${body.id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await res.json();
        if (!data) {
            return;
        }
        console.log(data);
        return await data;
    }

}