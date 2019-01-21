package com.vs.vsstoreapi.ServiceImpl;

import com.vs.vsstoreapi.model.Item;
import com.vs.vsstoreapi.repository.ItemMongoRepository;
import com.vs.vsstoreapi.repository.ItemRepository;
import com.vs.vsstoreapi.service.ItemMongoService;
import com.vs.vsstoreapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemMongoServiceImpl implements ItemMongoService {

    @Autowired
    private ItemMongoRepository itemMongoRepositoy;

    @Override
    public Item createItem(Item item) {
        return itemMongoRepositoy.save(item);
    }

    @Override
    public Optional<Item> getItem(Long id) {
        return itemMongoRepositoy.findById(id);
    }

    @Override
    public Item editItem(Item item) {
        return itemMongoRepositoy.save(item);
    }

    @Override
    public void deleteItem(Item item) {
        itemMongoRepositoy.delete(item);
    }

    @Override
    public void deleteItem(Long id) {
        itemMongoRepositoy.deleteById(id);
    }

    @Override
    public List getAllItems() {
        return itemMongoRepositoy.findAll();
    }

    @Override
    public long countItems() {
        return itemMongoRepositoy.count();
    }

    @Override
    public void deleteAll(){
        itemMongoRepositoy.deleteAll();
    }
}