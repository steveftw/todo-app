package ftw.steve.repositories;

import ftw.steve.models.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

@RepositoryRestController
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
