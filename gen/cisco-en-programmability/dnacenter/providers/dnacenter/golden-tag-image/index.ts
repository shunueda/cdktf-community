// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenTagImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#id GoldenTagImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#parameters GoldenTagImage#parameters}
  */
  readonly parameters?: GoldenTagImageParameters[] | cdktf.IResolvable;
}
export interface GoldenTagImageItem {
}

export function goldenTagImageItemToTerraform(struct?: GoldenTagImageItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function goldenTagImageItemToHclTerraform(struct?: GoldenTagImageItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoldenTagImageItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoldenTagImageItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenTagImageItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_role - computed: true, optional: false, required: false
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }

  // inherited_site_id - computed: true, optional: false, required: false
  public get inheritedSiteId() {
    return this.getStringAttribute('inherited_site_id');
  }

  // inherited_site_name - computed: true, optional: false, required: false
  public get inheritedSiteName() {
    return this.getStringAttribute('inherited_site_name');
  }

  // tagged_golden - computed: true, optional: false, required: false
  public get taggedGolden() {
    return this.getStringAttribute('tagged_golden');
  }
}

export class GoldenTagImageItemList extends cdktf.ComplexList {

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
  public get(index: number): GoldenTagImageItemOutputReference {
    return new GoldenTagImageItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoldenTagImageParameters {
  /**
  * Device Family Identifier e.g. : 277696480-283933147, 277696480
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#device_family_identifier GoldenTagImage#device_family_identifier}
  */
  readonly deviceFamilyIdentifier?: string;
  /**
  * Device Role. Permissible Values : ALL, UNKNOWN, ACCESS, BORDER ROUTER, DISTRIBUTION and CORE.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#device_role GoldenTagImage#device_role}
  */
  readonly deviceRole?: string;
  /**
  * imageId in uuid format.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#image_id GoldenTagImage#image_id}
  */
  readonly imageId?: string;
  /**
  * SiteId in uuid format. For Global Site "-1" to be used.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#site_id GoldenTagImage#site_id}
  */
  readonly siteId?: string;
}

export function goldenTagImageParametersToTerraform(struct?: GoldenTagImageParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_family_identifier: cdktf.stringToTerraform(struct!.deviceFamilyIdentifier),
    device_role: cdktf.stringToTerraform(struct!.deviceRole),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    site_id: cdktf.stringToTerraform(struct!.siteId),
  }
}


export function goldenTagImageParametersToHclTerraform(struct?: GoldenTagImageParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_family_identifier: {
      value: cdktf.stringToHclTerraform(struct!.deviceFamilyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_role: {
      value: cdktf.stringToHclTerraform(struct!.deviceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoldenTagImageParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoldenTagImageParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceFamilyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceFamilyIdentifier = this._deviceFamilyIdentifier;
    }
    if (this._deviceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRole = this._deviceRole;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoldenTagImageParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceFamilyIdentifier = undefined;
      this._deviceRole = undefined;
      this._imageId = undefined;
      this._siteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceFamilyIdentifier = value.deviceFamilyIdentifier;
      this._deviceRole = value.deviceRole;
      this._imageId = value.imageId;
      this._siteId = value.siteId;
    }
  }

  // device_family_identifier - computed: true, optional: true, required: false
  private _deviceFamilyIdentifier?: string; 
  public get deviceFamilyIdentifier() {
    return this.getStringAttribute('device_family_identifier');
  }
  public set deviceFamilyIdentifier(value: string) {
    this._deviceFamilyIdentifier = value;
  }
  public resetDeviceFamilyIdentifier() {
    this._deviceFamilyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFamilyIdentifierInput() {
    return this._deviceFamilyIdentifier;
  }

  // device_role - computed: true, optional: true, required: false
  private _deviceRole?: string; 
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }
  public set deviceRole(value: string) {
    this._deviceRole = value;
  }
  public resetDeviceRole() {
    this._deviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }
}

export class GoldenTagImageParametersList extends cdktf.ComplexList {
  public internalValue? : GoldenTagImageParameters[] | cdktf.IResolvable

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
  public get(index: number): GoldenTagImageParametersOutputReference {
    return new GoldenTagImageParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image dnacenter_golden_tag_image}
*/
export class GoldenTagImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_golden_tag_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenTagImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenTagImage to import
  * @param importFromId The id of the existing GoldenTagImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenTagImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_golden_tag_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/golden_tag_image dnacenter_golden_tag_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenTagImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoldenTagImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_golden_tag_image',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new GoldenTagImageItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GoldenTagImageParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GoldenTagImageParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(goldenTagImageParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(goldenTagImageParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoldenTagImageParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
