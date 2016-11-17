/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

/**
 *
 * @author Michael Abadi Santoso
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


public class DBConnector {
    
    private Connection conn = null;
    private String url = "jdbc:mariadb://localhost:3306/restfulapi";
    private String driverName = "org.mariadb.jdbc.Driver";

    public DBConnector() {
        
        try {
            Class.forName(driverName);
            conn = DriverManager.getConnection(url, "root", "");
            System.out.println("Created DB Connection....");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    
    public Connection getConn(){
        return conn;
    }
    
    public void setConn(Connection conn){
        this.conn = conn;
    }
}
