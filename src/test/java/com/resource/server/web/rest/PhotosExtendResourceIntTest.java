package com.resource.server.web.rest;

import com.resource.server.ResourceApp;
import com.resource.server.repository.PhotosExtendRepository;
import com.resource.server.repository.StockItemsRepository;
import com.resource.server.service.PhotosExtendService;
import com.resource.server.service.PhotosService;
import com.resource.server.service.StockItemsService;
import com.resource.server.service.mapper.PhotosMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
/**
 * Test class for the PhotosExtendResource REST controller.
 *
 * @see PhotosExtendResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ResourceApp.class)
public class PhotosExtendResourceIntTest {

    private MockMvc restMockMvc;
    private final PhotosExtendService photosExtendService;
    private final PhotosExtendRepository photosExtendRepository;

    public PhotosExtendResourceIntTest(PhotosExtendService photosExtendService,  PhotosExtendRepository photosExtendRepository) {
        this.photosExtendService = photosExtendService;
        this.photosExtendRepository = photosExtendRepository;
    }

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        PhotosExtendResource photosExtendResource = new PhotosExtendResource(photosExtendService, photosExtendRepository);
        restMockMvc = MockMvcBuilders
            .standaloneSetup(photosExtendResource)
            .build();
    }

    /**
     * Test defaultAction
     */
    @Test
    public void testDefaultAction() throws Exception {
        restMockMvc.perform(get("/api/photos-extend/default-action"))
            .andExpect(status().isOk());
    }
}
