package com.vs.vsstoreapi.service;


import com.vs.vsstoreapi.model.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    Item createItem(Item item);
    Optional<Item> getItem(Long id);
    Item editItem(Item item);
    void deleteItem(Item item);
    void deleteItem(Long id);
    void deleteAll();
    List getAllItems();
    long countItems();

}