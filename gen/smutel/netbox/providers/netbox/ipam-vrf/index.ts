// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments for this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#comments IpamVrf#comments}
  */
  readonly comments?: string;
  /**
  * The description of this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#description IpamVrf#description}
  */
  readonly description?: string;
  /**
  * Prevent duplicate prefixes/IP addresses within this VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#enforce_unique IpamVrf#enforce_unique}
  */
  readonly enforceUnique?: boolean | cdktf.IResolvable;
  /**
  * Array of ID of exported vrf targets attached to this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#export_targets IpamVrf#export_targets}
  */
  readonly exportTargets?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#id IpamVrf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Array of ID of imported vrf targets attached to this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#import_targets IpamVrf#import_targets}
  */
  readonly importTargets?: number[];
  /**
  * The name of this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#name IpamVrf#name}
  */
  readonly name: string;
  /**
  * The Route Distinguisher (RFC 4364) of this VRF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#rd IpamVrf#rd}
  */
  readonly rd?: string;
  /**
  * ID of the tenant where this VRF is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#tenant_id IpamVrf#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#custom_field IpamVrf#custom_field}
  */
  readonly customField?: IpamVrfCustomField[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#tag IpamVrf#tag}
  */
  readonly tag?: IpamVrfTag[] | cdktf.IResolvable;
}
export interface IpamVrfCustomField {
  /**
  * Name of the existing custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#name IpamVrf#name}
  */
  readonly name: string;
  /**
  * Type of the existing custom field (text,longtext, integer, boolean, date, url, json, select, multiselect, object, multiobject, selection (deprecated), multiple(deprecated)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#type IpamVrf#type}
  */
  readonly type: string;
  /**
  * Value of the existing custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#value IpamVrf#value}
  */
  readonly value: string;
}

export function ipamVrfCustomFieldToTerraform(struct?: IpamVrfCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamVrfCustomFieldToHclTerraform(struct?: IpamVrfCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamVrfCustomFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamVrfCustomField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamVrfCustomField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamVrfCustomFieldList extends cdktf.ComplexList {
  public internalValue? : IpamVrfCustomField[] | cdktf.IResolvable

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
  public get(index: number): IpamVrfCustomFieldOutputReference {
    return new IpamVrfCustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamVrfTag {
  /**
  * Name of the existing tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#name IpamVrf#name}
  */
  readonly name: string;
  /**
  * Slug of the existing tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#slug IpamVrf#slug}
  */
  readonly slug: string;
}

export function ipamVrfTagToTerraform(struct?: IpamVrfTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slug: cdktf.stringToTerraform(struct!.slug),
  }
}


export function ipamVrfTagToHclTerraform(struct?: IpamVrfTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamVrfTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamVrfTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamVrfTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slug = value.slug;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }
}

export class IpamVrfTagList extends cdktf.ComplexList {
  public internalValue? : IpamVrfTag[] | cdktf.IResolvable

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
  public get(index: number): IpamVrfTagOutputReference {
    return new IpamVrfTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf netbox_ipam_vrf}
*/
export class IpamVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_ipam_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamVrf to import
  * @param importFromId The id of the existing IpamVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_ipam_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_vrf netbox_ipam_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamVrfConfig
  */
  public constructor(scope: Construct, id: string, config: IpamVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_ipam_vrf',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._description = config.description;
    this._enforceUnique = config.enforceUnique;
    this._exportTargets = config.exportTargets;
    this._id = config.id;
    this._importTargets = config.importTargets;
    this._name = config.name;
    this._rd = config.rd;
    this._tenantId = config.tenantId;
    this._customField.internalValue = config.customField;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enforce_unique - computed: false, optional: true, required: false
  private _enforceUnique?: boolean | cdktf.IResolvable; 
  public get enforceUnique() {
    return this.getBooleanAttribute('enforce_unique');
  }
  public set enforceUnique(value: boolean | cdktf.IResolvable) {
    this._enforceUnique = value;
  }
  public resetEnforceUnique() {
    this._enforceUnique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceUniqueInput() {
    return this._enforceUnique;
  }

  // export_targets - computed: false, optional: true, required: false
  private _exportTargets?: number[]; 
  public get exportTargets() {
    return this.getNumberListAttribute('export_targets');
  }
  public set exportTargets(value: number[]) {
    this._exportTargets = value;
  }
  public resetExportTargets() {
    this._exportTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTargetsInput() {
    return this._exportTargets;
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

  // import_targets - computed: false, optional: true, required: false
  private _importTargets?: number[]; 
  public get importTargets() {
    return this.getNumberListAttribute('import_targets');
  }
  public set importTargets(value: number[]) {
    this._importTargets = value;
  }
  public resetImportTargets() {
    this._importTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTargetsInput() {
    return this._importTargets;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new IpamVrfCustomFieldList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: IpamVrfCustomField[] | cdktf.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new IpamVrfTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: IpamVrfTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      enforce_unique: cdktf.booleanToTerraform(this._enforceUnique),
      export_targets: cdktf.listMapper(cdktf.numberToTerraform, false)(this._exportTargets),
      id: cdktf.stringToTerraform(this._id),
      import_targets: cdktf.listMapper(cdktf.numberToTerraform, false)(this._importTargets),
      name: cdktf.stringToTerraform(this._name),
      rd: cdktf.stringToTerraform(this._rd),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      custom_field: cdktf.listMapper(ipamVrfCustomFieldToTerraform, true)(this._customField.internalValue),
      tag: cdktf.listMapper(ipamVrfTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_unique: {
        value: cdktf.booleanToHclTerraform(this._enforceUnique),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_targets: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._exportTargets),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_targets: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._importTargets),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd: {
        value: cdktf.stringToHclTerraform(this._rd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_field: {
        value: cdktf.listMapperHcl(ipamVrfCustomFieldToHclTerraform, true)(this._customField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamVrfCustomFieldList",
      },
      tag: {
        value: cdktf.listMapperHcl(ipamVrfTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamVrfTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
