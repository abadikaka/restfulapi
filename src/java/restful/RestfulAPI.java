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


import com.opensymphony.xwork2.Action;
import java.io.File;
import org.apache.commons.io.FileUtils;
import java.io.IOException; 
import com.opensymphony.xwork2.ModelDriven;
import com.opensymphony.xwork2.ActionSupport;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RestfulAPI extends ActionSupport{
   private File myFile;
   private String myFileContentType;
   private String myFileFileName;
   private String destPath;
   private String name;
   private String author;
   private String sinopsis;

   public String getJSON()
   {
        Book abc = new Book();
        abc.setAuthor(author);
        abc.setName(name);
        abc.setSinopsis(sinopsis);
        
        return Action.SUCCESS;
   }
   
   public String execute() throws SQLException
   {
      /* Copy file to a safe location */
        setDestPath("/home/hadoop/NetBeansProjects/RestfulAPI/document/");

      try{
            System.out.println("name: " + getName());

            System.out.println("Src File name: " + getMyFile());
            System.out.println("Dst File name: " + getMyFileFileName());

            File destFile  = new File(getDestPath(), getMyFileFileName());
            FileUtils.copyFile(getMyFile(), destFile);
            System.out.println("Berhasil");
            
            DBConnector connector = new DBConnector();
            Connection conn = connector.getConn();
            String sql = "insert into book (name,sinopsis,author) values (?,?,?)";
            PreparedStatement stmt = null;
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setString(2, sinopsis);
            stmt.setString(3, author);
            stmt.executeUpdate();
//            PreparedStatement ps = conn.prepareStatement(sql);
//            ResultSet rs0 = ps.executeQuery();
        
//            se.writeFakta(conn, namaperiod, list,Integer.parseInt(periodselect),Integer.parseInt(modelfakta));
        
      }catch(IOException e){
         e.printStackTrace();
         return ERROR;
      }

      return SUCCESS;
   }

    /**
     * @return the myFile
     */
    public File getMyFile() {
        return myFile;
    }

    /**
     * @param myFile the myFile to set
     */
    public void setMyFile(File myFile) {
        this.myFile = myFile;
    }

    /**
     * @return the myFileContentType
     */
    public String getMyFileContentType() {
        return myFileContentType;
    }

    /**
     * @param myFileContentType the myFileContentType to set
     */
    public void setMyFileContentType(String myFileContentType) {
        this.myFileContentType = myFileContentType;
    }

    /**
     * @return the myFileFileName
     */
    public String getMyFileFileName() {
        return myFileFileName;
    }

    /**
     * @param myFileFileName the myFileFileName to set
     */
    public void setMyFileFileName(String myFileFileName) {
        this.myFileFileName = myFileFileName;
    }

    /**
     * @return the destPath
     */
    public String getDestPath() {
        return destPath;
    }

    /**
     * @param destPath the destPath to set
     */
    public void setDestPath(String destPath) {
        this.destPath = destPath;
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

    
}
