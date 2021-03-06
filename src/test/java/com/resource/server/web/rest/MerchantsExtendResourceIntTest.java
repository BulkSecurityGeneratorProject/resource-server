package com.resource.server.web.rest;

import com.resource.server.ResourceApp;
import com.resource.server.service.MerchantsExtendService;
import com.resource.server.service.MerchantsService;
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
 * Test class for the MerchantsExtendResource REST controller.
 *
 * @see MerchantsExtendResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ResourceApp.class)
public class MerchantsExtendResourceIntTest {

    private MockMvc restMockMvc;
    private final MerchantsExtendService merchantsExtendService;

    public MerchantsExtendResourceIntTest(MerchantsExtendService merchantsExtendService) {
        this.merchantsExtendService = merchantsExtendService;
    }

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        MerchantsExtendResource merchantsExtendResource = new MerchantsExtendResource(merchantsExtendService);
        restMockMvc = MockMvcBuilders
            .standaloneSetup(merchantsExtendResource)
            .build();
    }

    /**
     * Test defaultAction
     */
    @Test
    public void testDefaultAction() throws Exception {
        restMockMvc.perform(get("/api/merchants-extend/default-action"))
            .andExpect(status().isOk());
    }
}
