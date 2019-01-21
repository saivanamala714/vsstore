package com.vs.vsstoreapi.ServiceImpl;

import com.vs.vsstoreapi.model.Item;
import com.vs.vsstoreapi.repository.ItemRepository;
import com.vs.vsstoreapi.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepositoy;

    @Override
    public Item createItem(Item item) {
        return itemRepositoy.save(item);
    }

    @Override
    public Optional<Item> getItem(Long id) {
        return itemRepositoy.findById(id);
    }

    @Override
    public Item editItem(Item item) {
        return itemRepositoy.save(item);
    }

    @Override
    public void deleteItem(Item item) {
        itemRepositoy.delete(item);
    }

    @Override
    public void deleteItem(Long id) {
        itemRepositoy.deleteById(id);
    }

    @Override
    public List getAllItems() {
        return itemRepositoy.findAll();
    }

    @Override
    public long countItems() {
        return itemRepositoy.count();
    }

    @Override
    public void deleteAll(){
        itemRepositoy.deleteAll();
    }
}