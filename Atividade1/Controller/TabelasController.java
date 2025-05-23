package projeto1.atividadesistemas.Controller;
import javafx.scene.control.TableCell;
import javafx.scene.text.Text;
import projeto1.appmitologia.model.Conto;
import projeto1.appmitologia.model.Heroi;

public class TabelasController {
    //  1º Refatoração
    //  Autor: Ana Beatrz
    //  cria classe Tabelas, com partes de código em comum usada por classes.
    //  Objetivo: compactação do código
    public TableCell<Heroi, String> wrapHeroi(){
        return new TableCell<Heroi, String>() {
            Text text = new Text();
            @Override
            protected void updateItem(String item, boolean empty) {
                super.updateItem(item, empty);
                if (empty) {
                    setGraphic(null);
                    return;
                }
                text.setWrappingWidth(getTableColumn().getWidth() - 10);
                text.setText(item);
                setGraphic(text);
            }
        };
    }
    public TableCell<Conto, String> wrapConto(){
        return new TableCell<Conto, String>() {
            Text text = new Text();
            @Override
            protected void updateItem(String item, boolean empty) {
                super.updateItem(item, empty);
                if (empty) {
                    setGraphic(null);
                    return;
                }
                text.setWrappingWidth(getTableColumn().getWidth() - 10);
                text.setText(item);
                setGraphic(text);
            }
        };
    }


}
