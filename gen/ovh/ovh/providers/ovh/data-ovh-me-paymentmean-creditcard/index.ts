// https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhMePaymentmeanCreditcardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#description_regexp DataOvhMePaymentmeanCreditcard#description_regexp}
  */
  readonly descriptionRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#id DataOvhMePaymentmeanCreditcard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#states DataOvhMePaymentmeanCreditcard#states}
  */
  readonly states?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#use_default DataOvhMePaymentmeanCreditcard#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#use_last_to_expire DataOvhMePaymentmeanCreditcard#use_last_to_expire}
  */
  readonly useLastToExpire?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard ovh_me_paymentmean_creditcard}
*/
export class DataOvhMePaymentmeanCreditcard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_me_paymentmean_creditcard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhMePaymentmeanCreditcard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhMePaymentmeanCreditcard to import
  * @param importFromId The id of the existing DataOvhMePaymentmeanCreditcard that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhMePaymentmeanCreditcard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_me_paymentmean_creditcard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.8.0/docs/data-sources/me_paymentmean_creditcard ovh_me_paymentmean_creditcard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhMePaymentmeanCreditcardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOvhMePaymentmeanCreditcardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_me_paymentmean_creditcard',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionRegexp = config.descriptionRegexp;
    this._id = config.id;
    this._states = config.states;
    this._useDefault = config.useDefault;
    this._useLastToExpire = config.useLastToExpire;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_regexp - computed: false, optional: true, required: false
  private _descriptionRegexp?: string; 
  public get descriptionRegexp() {
    return this.getStringAttribute('description_regexp');
  }
  public set descriptionRegexp(value: string) {
    this._descriptionRegexp = value;
  }
  public resetDescriptionRegexp() {
    this._descriptionRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexpInput() {
    return this._descriptionRegexp;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // states - computed: false, optional: true, required: false
  private _states?: string[]; 
  public get states() {
    return cdktf.Fn.tolist(this.getListAttribute('states'));
  }
  public set states(value: string[]) {
    this._states = value;
  }
  public resetStates() {
    this._states = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states;
  }

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // use_last_to_expire - computed: false, optional: true, required: false
  private _useLastToExpire?: boolean | cdktf.IResolvable; 
  public get useLastToExpire() {
    return this.getBooleanAttribute('use_last_to_expire');
  }
  public set useLastToExpire(value: boolean | cdktf.IResolvable) {
    this._useLastToExpire = value;
  }
  public resetUseLastToExpire() {
    this._useLastToExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLastToExpireInput() {
    return this._useLastToExpire;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_regexp: cdktf.stringToTerraform(this._descriptionRegexp),
      id: cdktf.stringToTerraform(this._id),
      states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._states),
      use_default: cdktf.booleanToTerraform(this._useDefault),
      use_last_to_expire: cdktf.booleanToTerraform(this._useLastToExpire),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_regexp: {
        value: cdktf.stringToHclTerraform(this._descriptionRegexp),
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
      states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._states),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_default: {
        value: cdktf.booleanToHclTerraform(this._useDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_last_to_expire: {
        value: cdktf.booleanToHclTerraform(this._useLastToExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
