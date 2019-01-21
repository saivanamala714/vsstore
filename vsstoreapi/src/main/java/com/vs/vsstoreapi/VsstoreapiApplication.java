package com.vs.vsstoreapi;

import com.vs.vsstoreapi.model.Item;
import com.vs.vsstoreapi.repository.ItemRepository;
import com.vs.vsstoreapi.service.ItemService;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.JdbcTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class VsstoreapiApplication implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(VsstoreapiApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(VsstoreapiApplication.class, args);
    }


    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    ItemService service;

    @Override
    public void run(String... strings) throws Exception {

        log.info("Creating tables");

        jdbcTemplate.execute("DROP TABLE Item IF EXISTS");
        jdbcTemplate.execute("CREATE TABLE Item(" +
                "id NUMBER, name VARCHAR(255), price FLOAT , description VARCHAR(255))");


//        // Split up the array of whole names into an array of first/last names
//        List<Object[]> splitUpNames = Arrays.asList("John 100.0 Woo", "Jeff 100.0 Dean", "Josh 100.0 Bloch", "Josh 100.0 Long").stream()
//                .map(name -> name.split(" "))
//                .collect(Collectors.toList());
//
//        // Use a Java 8 stream to print out each tuple of the list
//        splitUpNames.forEach(name -> log.info(String.format("Inserting customer record for %s %f %s", name[0], new Double(name[1].toString()), name[2])));
//
//        // Uses JdbcTemplate's batchUpdate operation to bulk load data
//        jdbcTemplate.batchUpdate("INSERT INTO Item(name,price, description) VALUES (?,?, ?)", splitUpNames);

        log.info("Querying for customer records where name = 'Sai':");
//        for(int a=0; a< 100000; a++){
//            service.createItem(new Item("AMTM" + a,"AMTM Pricing", 200.0));
//        }

        log.info("Items Count : " + service.countItems());

//        jdbcTemplate.query(
//                "SELECT  id, name, description, price FROM Item WHERE price > ?", new Object[] {new Double("0.0")},
//                (rs, rowNum) -> new Item(rs.getLong("id"),rs.getString("name"), rs.getString("description"), rs.getDouble("price"))
//        ).forEach(customer -> log.info(customer.toString()));

       // LOG.info("Current objects in DB: {}", service.countPersons());


    }
}

