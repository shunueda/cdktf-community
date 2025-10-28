// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResellerImagesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#entity_id ResellerImagesV2#entity_id}
  */
  readonly entityId: number;
  /**
  * The entity type. Available values are 'reseller', 'client', 'project'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#entity_type ResellerImagesV2#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#id ResellerImagesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#options ResellerImagesV2#options}
  */
  readonly options: ResellerImagesV2Options[] | cdktf.IResolvable;
}
export interface ResellerImagesV2Options {
  /**
  * A list of image IDs available for clients of the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#image_ids ResellerImagesV2#image_ids}
  */
  readonly imageIds?: string[];
  /**
  * The ID of the region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#region_id ResellerImagesV2#region_id}
  */
  readonly regionId: number;
}

export function resellerImagesV2OptionsToTerraform(struct?: ResellerImagesV2Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imageIds),
    region_id: cdktf.numberToTerraform(struct!.regionId),
  }
}


export function resellerImagesV2OptionsToHclTerraform(struct?: ResellerImagesV2Options | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imageIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    region_id: {
      value: cdktf.numberToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResellerImagesV2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ResellerImagesV2Options | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIds = this._imageIds;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResellerImagesV2Options | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageIds = undefined;
      this._regionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageIds = value.imageIds;
      this._regionId = value.regionId;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // image_ids - computed: false, optional: true, required: false
  private _imageIds?: string[]; 
  public get imageIds() {
    return cdktf.Fn.tolist(this.getListAttribute('image_ids'));
  }
  public set imageIds(value: string[]) {
    this._imageIds = value;
  }
  public resetImageIds() {
    this._imageIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdsInput() {
    return this._imageIds;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class ResellerImagesV2OptionsList extends cdktf.ComplexList {
  public internalValue? : ResellerImagesV2Options[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ResellerImagesV2OptionsOutputReference {
    return new ResellerImagesV2OptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2 edgecenter_reseller_imagesV2}
*/
export class ResellerImagesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_reseller_imagesV2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResellerImagesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResellerImagesV2 to import
  * @param importFromId The id of the existing ResellerImagesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResellerImagesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_reseller_imagesV2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.3/docs/resources/reseller_images_v2 edgecenter_reseller_imagesV2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResellerImagesV2Config
  */
  public constructor(scope: Construct, id: string, config: ResellerImagesV2Config) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_reseller_imagesV2',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._id = config.id;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: number; 
  public get entityId() {
    return this.getNumberAttribute('entity_id');
  }
  public set entityId(value: number) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // options - computed: false, optional: false, required: true
  private _options = new ResellerImagesV2OptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: ResellerImagesV2Options[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity_id: cdktf.numberToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      options: cdktf.listMapper(resellerImagesV2OptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktf.numberToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(resellerImagesV2OptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ResellerImagesV2OptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
