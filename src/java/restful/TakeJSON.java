/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package restful;

import com.opensymphony.xwork2.Action;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Michael Abadi Santoso
 */
public class TakeJSON {
   private String name;
   private String author;
   private String sinopsis;
   private List<Book> arrayBook = new ArrayList<Book>();
        
   public String getJSON() throws SQLException
   {
        DBConnector connector = new DBConnector();
        Connection conn = connector.getConn();
        String sql = "SELECT * from book";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs0 = ps.executeQuery();
        while(rs0.next()){  
           Book buku = new Book();
           buku.setName(rs0.getString(2));
           buku.setSinopsis(rs0.getString(3));
           buku.setAuthor(rs0.getString(4));
           arrayBook.add(buku);           
        }  
        conn.close();
        return Action.SUCCESS;
   }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the author
     */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author the author to set
     */
    public void setAuthor(String author) {
        this.author = author;
    }

    /**
     * @return the sinopsis
     */
    public String getSinopsis() {
        return sinopsis;
    }

    /**
     * @param sinopsis the sinopsis to set
     */
    public void setSinopsis(String sinopsis) {
        this.sinopsis = sinopsis;
    }

    /**
     * @return the arrayBook
     */
    public List<Book> getArrayBook() {
        return arrayBook;
    }

    /**
     * @param arrayBook the arrayBook to set
     */
    public void setArrayBook(List<Book> arrayBook) {
        this.arrayBook = arrayBook;
    }
   
}
