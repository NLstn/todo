package cloud.nlstn.todo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private final List<Todo> todos = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public List<Todo> findAll() {
        return todos;
    }

    public Optional<Todo> findById(Long id) {
        return todos.stream().filter(todo -> todo.getId().equals(id)).findFirst();
    }

    public Todo save(Todo todo) {
        if (todo.getId() == null) {
            todo.setId(counter.incrementAndGet());
        }
        todos.add(todo);
        return todo;
    }

    public void deleteById(Long id) {
        todos.removeIf(todo -> todo.getId().equals(id));
    }
}
