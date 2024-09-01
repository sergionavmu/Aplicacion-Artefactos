package abp.abpfollow.api;

import abp.abpfollow.model.Friends;
import abp.abpfollow.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/friends")
public class FriendsController {

    @Autowired
    private FriendService friendService;

    @GetMapping
    private ResponseEntity getFriend(){
        return this.friendService.getFriends();
    }

    @PostMapping
    private ResponseEntity postFriend(@RequestBody Friends friends){
        return  this.friendService.postFriends(friends);
    }
    @PostMapping("/allFriends")
    private ResponseEntity postAllFriends(@RequestBody ArrayList<Friends> friends){
        return this.friendService.postAllFriends(friends);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity deleteFriend (@PathVariable int id){
        return this.friendService.deleteFriends(id);
    }
}
