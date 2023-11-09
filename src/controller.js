import {pool} from './database.js';

class ProductoController{

    async getAll(req, res) {
        try {
            const [result] = await pool.query('SELECT * FROM productos');
            res.json(result);
        } catch (error) {
            console.log('ERROR: No se pudo obtener la lista:', error);
            res.status(500).json({ error: 'No se pudo obtener la lista de productos' });
        }
    }

    async getOne(req, res) {
        const productoId = req.params.id; 
        try {
            const [result] = await pool.query('SELECT * FROM productos WHERE id = ?', [productoId]);
            res.json(result);
        } catch (error) {
            console.log('ERROR: No se pudo obtener el producto por ID:', error);
            res.status(500).json({ error: 'No se pudo obtener el producto por ID' });
        }
    }

    async add(req, res){
        const producto = req.body;
        try {
            const [result] = await pool.query(`INSERT INTO productos (nombre, categoria, marca) VALUES (?, ?, ?)`, [producto.nombre, producto.categoria, producto.marca]);
        res.json({"id insertado": result.insertId});
        }catch (error){
            console.log ('ERROR: El producto no pudo ser agregado:', error);
        }
        
    }

    async delete(req, res){
        const producto = req.body;
        try {
            const [result] = await pool.query(`DELETE FROM productos WHERE id=(?)`, [producto.id]);
        res.json({"Registros eliminados por id": result.affectedRows});
        }catch (error){
            console.log ('ERROR: No se pudo eliminar producto por id:', error);
        }
        
    }

    async update(req, res) {
        const producto = req.body;
        try {
            const [result] = await pool.query('UPDATE productos SET nombre = ?, categoria = ?, marca = ? WHERE id = ?', [producto.nombre, producto.categoria, producto.marca, producto.id]);
            res.json({ "Registros actualizados": result.changedRows });
        } catch (error) {
            console.log('ERROR: No se pudo actualizar el producto:', error);
        }
    }
}

export const producto = new ProductoController();
