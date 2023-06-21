package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.Post;
import com.mycompany.myapp.service.dto.PostDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Post} and its DTO {@link PostDTO}.
 */
@Mapper(componentModel = "spring")
public interface PostMapper extends EntityMapper<PostDTO, Post> {}
