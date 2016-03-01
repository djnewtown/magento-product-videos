<?php
/**
 * Creating a model with select options. Describes video players placement in
 * templates.
 *
 * @package     Keyup_ProductVideos
 * @author      Jan Kuchař <jan.kuchar@keyup.eu>
 * @copyright   Copyright (c) 2015 Keyup IT Services (http://www.keyup.eu)
 * @license     http://keyup.mit-license.org/2012 MIT License
 */

class Keyup_ProductVideos_Model_Source_VideoBehavior {
   public function toOptionArray() {
       $h = Mage::helper('keyup_productvideos');
       $vals = array(
           array('value' => Keyup_ProductVideos_Model_Config::MOVIES_FISRT, 'label' => $h->__('In gallery. Movies first, then pictures')),
           array('value' => Keyup_ProductVideos_Model_Config::PICTURE_FIRST, 'label' => $h->__('In gallery. Pictures first, then movies')),
           array('value' => Keyup_ProductVideos_Model_Config::MOVIES_UNDER_DESCRIPTION, 'label' => $h->__('In product description, below existing content'))
       );
       return $vals;
   }
}
