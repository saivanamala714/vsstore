package com.vs.vsstoreapi.repository;

import com.vs.vsstoreapi.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemMongoRepository extends MongoRepository<Item, Long> {

}
