import {pool} from './database.js';

class PersonaController{

    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM personas');
        res.json(result);
    }

    async add(req, res){
        const persona = req.body;
        const [result] = await pool.query(`INSERT INTO personas (nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [persona.nombre, persona.autor, persona.categoria, persona.año_publicacion, persona.ISBN]);
        res.json({"id insertado": result.insertId});
    }

    async delete(req, res){
        const persona = req.body;
        const [result] = await pool.query(`DELETE FROM Personas WHERE id=(?)`, [persona.id]);
        res.json({"Registros eliminados": result.affectedRows});
    }

    async update(req, res){
        const persona = req.body;
        const [result] = await pool.query(`UPDATE Personas SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [persona.nombre, persona.autor, persona.categoria, persona.año_publicacion, persona.ISBN, persona.id]);
        res.json({"Registros actualizados": result.changedRows});
    }
}

export const persona = new PersonaController();
