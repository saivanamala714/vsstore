package com.vs.vsstoreapi.components;

import com.vs.vsstoreapi.model.Item;
import com.vs.vsstoreapi.service.ItemMongoService;
import com.vs.vsstoreapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/")
public class StroreResource {

    @Autowired
    private ApplicationContext applicationContext;
    @Autowired
    ItemService oracleService;
    @Autowired
    ItemMongoService mongoService;

    @GetMapping("/mongo/status")
    @ResponseBody
    public String status(){
        System.out.println(applicationContext);
        Environment env = applicationContext.getBean(Environment.class);
        String status = mongoService.toString() + oracleService.toString();
        return status;
    }

   @GetMapping("/mongo/getItems")
   @ResponseBody
   public List<Item> getAllItemsFromMongoDB(){
       List<Item> items = mongoService.getAllItems();
       return items;
   }

    @GetMapping("/oracle/getItems")
    @ResponseBody
    public List<Item> getAllItemsFromOracleDB(){
        List<Item> items = oracleService.getAllItems();
        return items;
    }



    @PostMapping("/postItem")
    int newItemMongo(@RequestBody List<Item> newItems) {
        newItems.stream().forEach((item) -> oracleService.createItem(item));
        newItems.stream().forEach((item) -> mongoService.createItem(item));
        return newItems.size();
    }

    @DeleteMapping("/mongo/delete")
    void deleteAllMongo(){
        oracleService.deleteAll();
    }

    @DeleteMapping("/oracle/delete")
    void deleteAllOracle(){
        mongoService.deleteAll();
    }


}
