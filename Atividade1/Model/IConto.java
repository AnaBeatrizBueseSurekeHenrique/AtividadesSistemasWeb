package projeto1.atividadesistemas.Model;
import java.sql.SQLException;
import java.util.List;

public interface IConto {
    public void insere(Conto conto) throws SQLException;
    public void atualiza(Conto conto) throws SQLException;
    public void remove(int id) throws SQLException;
    public List<Conto> listaTodos() throws SQLException;
}