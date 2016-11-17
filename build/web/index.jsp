<%-- 
    Document   : index
    Created on : Nov 17, 2016, 1:08:52 AM
    Author     : Michael Abadi Santoso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html>
   
    <head>
        <title>Dashboard</title>
        <%@ include file="header.jsp" %>
    </head>

    <body>
        <div class="ui menu inverted" style="z-index: 1000">
            <div class="ui header item">
                RESTFUL API TEST
            </div>
            <div class="right menu">
                <div class="item">
                    <div class="ui transparent inverted icon input">
                        <i class="search icon"></i>
                        <input type="text" placeholder="Search">
                    </div>
                </div>
                <div class="ui dropdown item" tabindex="0">
                    <i class="user icon"></i>
                    <div class="ui label">
                        Michael Abadi Santoso
                    </div>
                    <i class="dropdown icon"></i>
                    <div class="menu transition hidden" tabindex="-">
                        <a class="item" href="logOut.action"> Logout</a>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="ui grid height-100 no-margin padt-50">
            <div class="two wide column height-100 no-padding">
                <div class="ui left fixed inverted vertical pointing accordion menu inline-block min-width-150">
                    <a class="item active" href="index.action">Input Data</a>
                </div>
            </div>
            <div class="fourteen wide column zindex-1" style="z-index: 10">
                <div class="ui main">
                    <div class="one column">
                        <div class="column">
                            <h1>Input Data</h1>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="five column stackable ui grid">
                        <form class="ui form" action="pageAction" method="post" enctype="multipart/form-data">
                        <br>
                        <div class="one column ui grid">
                            <div class="column">
                                <div class="ui fluid input">
                                    <input type="text" name="name" placeholder="Name of Book">
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui fluid input">
                                    <input type="text" name="sinopsis" placeholder="Synopsis">
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui fluid input">
                                    <input type="text" name="author" placeholder="Author">
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui fluid input">
                                    <input type="file" name="myFile" />
                                </div>
                            </div>

                            <div class="column">
                                    <button type="submit" value="PageAction" class="ui orange button">Proses</button>
                            </div>
                        </div>
                        <br>
                        </form>

                    </div>

                    <div class="ui divider">

                    </div>
                </div>
            </div>
        </div>
        
        <%@ include file="footer.jsp" %>
    </body>
</html>